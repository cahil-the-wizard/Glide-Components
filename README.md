# Glide Components

A SwiftUI component library with Storybook documentation.

## SwiftUI Package

### Installation

Add this package to your Xcode project or Package.swift:

```swift
dependencies: [
    .package(path: "path/to/GlideComponents")
]
```

### Usage

```swift
import SwiftUI
import GlideComponents

struct ContentView: View {
    @State private var text = ""
    
    var body: some View {
        VStack(spacing: 20) {
            GlideCard {
                VStack(alignment: .leading, spacing: 12) {
                    Text("Welcome")
                        .font(.title2)
                        .fontWeight(.bold)
                    
                    GlideTextField("Enter your name", text: $text)
                    
                    GlideButton("Submit", style: .primary) {
                        print("Button tapped")
                    }
                }
            }
        }
        .padding()
    }
}
```

## Components

- **GlideButton**: Customizable button with multiple styles and sizes
- **GlideCard**: Container view with consistent styling and shadow
- **GlideTextField**: Text input field with custom styling

## Storybook

To view component documentation and interact with components:

```bash
cd Storybook
npm install
npm run storybook
```

This will start Storybook on http://localhost:6006

### Building Storybook

```bash
cd Storybook
npm run build-storybook
```

## Development

### Testing the SwiftUI Package

```bash
swift test
```

### Building the SwiftUI Package

```bash
swift build
```