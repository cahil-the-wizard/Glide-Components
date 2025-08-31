#!/bin/bash

echo "🚀 Setting up Glide Components..."

# Install Storybook dependencies
echo "📦 Installing Storybook dependencies..."
cd Storybook
npm install

echo "✅ Setup complete!"
echo ""
echo "To get started:"
echo "• Run 'swift build' to build the SwiftUI package"
echo "• Run 'swift test' to run tests"
echo "• Run 'cd Storybook && npm run storybook' to start Storybook"