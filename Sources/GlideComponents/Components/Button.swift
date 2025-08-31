import SwiftUI

@available(iOS 15.0, macOS 12.0, *)
public struct GlideButton: View {
    public enum Style {
        case primary        // Dark background, light text
        case secondary      // Light background, dark text
        case tertiary       // Medium gray background, dark text
        case outline        // Transparent background with border
        case ghost          // Transparent background, no border
    }
    
    public enum Size {
        case small          // 8px vertical padding
        case medium         // 12px padding
    }
    
    private let title: String
    private let action: () -> Void
    private let style: Style
    private let size: Size
    private let isDisabled: Bool
    private let leadingIcon: String?
    private let trailingIcon: String?
    
    public init(
        _ title: String,
        style: Style = .primary,
        size: Size = .medium,
        leadingIcon: String? = nil,
        trailingIcon: String? = nil,
        isDisabled: Bool = false,
        action: @escaping () -> Void
    ) {
        self.title = title
        self.action = action
        self.style = style
        self.size = size
        self.leadingIcon = leadingIcon
        self.trailingIcon = trailingIcon
        self.isDisabled = isDisabled
    }
    
    public var body: some View {
        Button(action: action) {
            HStack(spacing: 8) {
                // Leading icon
                if let leadingIcon = leadingIcon {
                    GlideIcon(leadingIcon, size: .sm, color: foregroundColor)
                }
                
                // Title text
                Text(title)
                    .font(GlideTypography.body)
                    .foregroundColor(foregroundColor)
                
                // Trailing icon
                if let trailingIcon = trailingIcon {
                    GlideIcon(trailingIcon, size: .sm, color: foregroundColor)
                }
            }
            .padding(paddingForSize)
            .background(backgroundColor)
            .cornerRadius(38) // Pill shape
            .overlay(
                RoundedRectangle(cornerRadius: 38)
                    .inset(by: 0.5)
                    .stroke(strokeColor, lineWidth: strokeWidth)
            )
        }
        .buttonStyle(GlideButtonStyle(style: style))
        .disabled(isDisabled)
        .opacity(isDisabled ? 0.6 : 1.0)
    }
    
    private var paddingForSize: EdgeInsets {
        switch size {
        case .small: return EdgeInsets(top: 8, leading: 12, bottom: 8, trailing: 12)
        case .medium: return EdgeInsets(top: 12, leading: 12, bottom: 12, trailing: 12)
        }
    }
    
    private var backgroundColor: Color {
        switch style {
        case .primary: return GlideColors.GrayDark._900        // Very dark background
        case .secondary: return GlideColors.GrayLight._200     // Medium gray background  
        case .tertiary: return GlideColors.GrayLight._25       // Very light background
        case .outline: return Color.clear                      // Transparent
        case .ghost: return Color.clear                        // Transparent
        }
    }
    
    private var foregroundColor: Color {
        switch style {
        case .primary: return GlideColors.GrayLight._25        // Light text on dark background
        case .secondary: return GlideColors.GrayDark._900      // Dark text on gray background
        case .tertiary: return GlideColors.GrayDark._900       // Dark text on light background
        case .outline: return GlideColors.GrayDark._900        // Dark text with border
        case .ghost: return GlideColors.GrayLight._600         // Medium gray text, no background
        }
    }
    
    private var strokeColor: Color {
        switch style {
        case .primary: return GlideColors.GrayLight._700.opacity(0.3)  // Subtle border on dark
        case .secondary, .tertiary: return Color.clear                 // No border on filled styles
        case .outline: return GlideColors.GrayLight._300               // Visible border on outline
        case .ghost: return Color.clear                                // No border on ghost
        }
    }
    
    private var strokeWidth: CGFloat {
        switch style {
        case .primary, .outline: return 0.5
        case .secondary, .tertiary, .ghost: return 0
        }
    }
}

// MARK: - Button Style for Hover Effects
@available(iOS 15.0, macOS 12.0, *)
struct GlideButtonStyle: ButtonStyle {
    let style: GlideButton.Style
    
    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .scaleEffect(configuration.isPressed ? 0.98 : 1.0)
            .opacity(getOpacity(isPressed: configuration.isPressed))
            .animation(.easeInOut(duration: 0.15), value: configuration.isPressed)
    }
    
    private func getOpacity(isPressed: Bool) -> Double {
        if isPressed {
            switch style {
            case .primary, .secondary, .tertiary: return 0.8
            case .outline, .ghost: return 0.7
            }
        }
        return 1.0
    }
}