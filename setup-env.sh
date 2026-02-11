#!/bin/bash

# Script to copy .env.example to .env and create symlinks in apps subdirectories

set -e

# Get the directory where the script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Define paths
ENV_EXAMPLE="$SCRIPT_DIR/.env.example"
ENV_FILE="$SCRIPT_DIR/.env"
BACKEND_DIR="$SCRIPT_DIR/apps/backend"
FRONTEND_DIR="$SCRIPT_DIR/apps/frontend"

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}Setting up environment files...${NC}"

# Check if .env.example exists
if [ ! -f "$ENV_EXAMPLE" ]; then
    echo -e "${YELLOW}Error: .env.example not found at $ENV_EXAMPLE${NC}"
    exit 1
fi

# Copy .env.example to .env if .env doesn't exist
if [ -f "$ENV_FILE" ]; then
    echo -e "${YELLOW}.env already exists, skipping copy${NC}"
else
    cp "$ENV_EXAMPLE" "$ENV_FILE"
    echo -e "${GREEN}✓ Created .env from .env.example${NC}"
fi

# Create symlinks in subdirectories
for dir in "$BACKEND_DIR" "$FRONTEND_DIR"; do
    if [ ! -d "$dir" ]; then
        echo -e "${YELLOW}Warning: Directory $dir not found, skipping${NC}"
        continue
    fi

    symlink_path="$dir/.env"

    # Remove existing symlink or file if it exists
    if [ -L "$symlink_path" ]; then
        rm "$symlink_path"
        echo -e "${GREEN}✓ Removed existing symlink at $symlink_path${NC}"
    elif [ -f "$symlink_path" ]; then
        echo -e "${YELLOW}Warning: Regular file exists at $symlink_path, not overwriting${NC}"
        continue
    fi

    # Create symlink
    ln -s "$ENV_FILE" "$symlink_path"
    echo -e "${GREEN}✓ Created symlink: $symlink_path -> $ENV_FILE${NC}"
done

echo -e "${BLUE}Setup complete!${NC}"
