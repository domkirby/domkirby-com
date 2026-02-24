#!/usr/bin/env bash
set -euo pipefail

# ── helpers ──────────────────────────────────────────────────────────────────

slugify() {
  echo "$1" \
    | tr '[:upper:]' '[:lower:]' \
    | sed 's/[^a-z0-9 ]//g' \
    | sed 's/ \+/-/g' \
    | sed 's/^-\|-$//g'
}

prompt() {
  local label="$1" default="${2:-}"
  if [[ -n "$default" ]]; then
    read -rp "  $label [$default]: " value
    echo "${value:-$default}"
  else
    read -rp "  $label: " value
    echo "$value"
  fi
}

# ── gather fields ─────────────────────────────────────────────────────────────

echo ""
echo "┌─────────────────────────────────┐"
echo "│  New Post                       │"
echo "└─────────────────────────────────┘"
echo ""

TITLE=$(prompt "Title")
if [[ -z "$TITLE" ]]; then
  echo "Error: title is required." >&2
  exit 1
fi

DATE=$(prompt "Date" "$(date +%Y-%m-%d)")
YEAR="${DATE:0:4}"

SUGGESTED_SLUG=$(slugify "$TITLE")
SLUG=$(prompt "Slug" "$SUGGESTED_SLUG")
if [[ -z "$SLUG" ]]; then
  echo "Error: slug is required." >&2
  exit 1
fi

echo "  Categories (comma-separated, e.g. cybersecurity,ai)"
RAW_CATEGORIES=$(prompt "Categories" "")

echo "  Tags (comma-separated)"
RAW_TAGS=$(prompt "Tags" "")

COVER=$(prompt "Cover image filename (leave blank to add later)" "")

# ── build YAML arrays ─────────────────────────────────────────────────────────

format_yaml_list() {
  local input="$1"
  if [[ -z "$input" ]]; then
    echo "  []"
    return
  fi
  IFS=',' read -ra items <<< "$input"
  local out=""
  for item in "${items[@]}"; do
    item="$(echo "$item" | xargs | tr '[:upper:]' '[:lower:]')"
    out+="  - \"$item\""$'\n'
  done
  echo -n "$out"
}

CATEGORIES_YAML=$(format_yaml_list "$RAW_CATEGORIES")
TAGS_YAML=$(format_yaml_list "$RAW_TAGS")

# ── create files ──────────────────────────────────────────────────────────────

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT="$(dirname "$SCRIPT_DIR")"

POST_DIR="$ROOT/src/content/posts/$YEAR/$SLUG"
PUBLIC_IMG_DIR="$ROOT/public/posts/$YEAR/$SLUG/images"

if [[ -d "$POST_DIR" ]]; then
  echo ""
  echo "Error: $POST_DIR already exists." >&2
  exit 1
fi

mkdir -p "$POST_DIR/images"
mkdir -p "$PUBLIC_IMG_DIR"

# Build frontmatter
if [[ -n "$COVER" ]]; then
  COVER_LINE="coverImage: \"$COVER\""
else
  COVER_LINE="# coverImage: \"filename.jpg\""
fi

cat > "$POST_DIR/index.md" <<EOF
---
title: "$TITLE"
date: $DATE
categories:
$CATEGORIES_YAML
tags:
$TAGS_YAML
$COVER_LINE
---

Write your post content here.
EOF

# ── summary ───────────────────────────────────────────────────────────────────

echo ""
echo "✓ Post created:"
echo "    $POST_DIR/index.md"
echo "    $POST_DIR/images/         ← place cover + inline images here"
echo "    $PUBLIC_IMG_DIR/  ← mirror images here to serve them"
echo ""
echo "  URL will be: /blog/$YEAR/$SLUG"
echo ""
echo "  When you add images, copy them to both locations:"
echo "    src/content/posts/$YEAR/$SLUG/images/<file>"
echo "    public/posts/$YEAR/$SLUG/images/<file>"
echo ""
