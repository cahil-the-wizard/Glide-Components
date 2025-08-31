import SwiftUI

@available(iOS 15.0, macOS 12.0, *)
public struct GlideCard<Content: View>: View {
    private let content: Content
    private let padding: CGFloat
    private let cornerRadius: CGFloat
    private let shadowRadius: CGFloat
    
    public init(
        padding: CGFloat = 16,
        cornerRadius: CGFloat = 12,
        shadowRadius: CGFloat = 2,
        @ViewBuilder content: () -> Content
    ) {
        self.content = content()
        self.padding = padding
        self.cornerRadius = cornerRadius
        self.shadowRadius = shadowRadius
    }
    
    public var body: some View {
        content
            .padding(padding)
            .background(GlideColors.surface)
            .cornerRadius(cornerRadius)
            .overlay(
                RoundedRectangle(cornerRadius: cornerRadius)
                    .stroke(GlideColors.border, lineWidth: 1)
            )
            .shadow(color: GlideColors.GrayLight._400.opacity(0.1), radius: shadowRadius, x: 0, y: 1)
    }
}