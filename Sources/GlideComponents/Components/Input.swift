import SwiftUI

// Custom shape for selective corner radius
@available(iOS 15.0, macOS 12.0, *)
struct RoundedCorners: Shape {
    let topLeft: CGFloat
    let topRight: CGFloat
    let bottomLeft: CGFloat
    let bottomRight: CGFloat
    
    func path(in rect: CGRect) -> Path {
        var path = Path()
        
        let width = rect.size.width
        let height = rect.size.height
        
        // Move to starting point (top-left corner)
        path.move(to: CGPoint(x: 0, y: topLeft))
        
        // Top-left corner
        path.addArc(center: CGPoint(x: topLeft, y: topLeft),
                   radius: topLeft,
                   startAngle: .radians(.pi),
                   endAngle: .radians(3 * .pi / 2),
                   clockwise: false)
        
        // Top edge
        path.addLine(to: CGPoint(x: width - topRight, y: 0))
        
        // Top-right corner
        path.addArc(center: CGPoint(x: width - topRight, y: topRight),
                   radius: topRight,
                   startAngle: .radians(3 * .pi / 2),
                   endAngle: .radians(0),
                   clockwise: false)
        
        // Right edge
        path.addLine(to: CGPoint(x: width, y: height - bottomRight))
        
        // Bottom-right corner
        path.addArc(center: CGPoint(x: width - bottomRight, y: height - bottomRight),
                   radius: bottomRight,
                   startAngle: .radians(0),
                   endAngle: .radians(.pi / 2),
                   clockwise: false)
        
        // Bottom edge
        path.addLine(to: CGPoint(x: bottomLeft, y: height))
        
        // Bottom-left corner
        path.addArc(center: CGPoint(x: bottomLeft, y: height - bottomLeft),
                   radius: bottomLeft,
                   startAngle: .radians(.pi / 2),
                   endAngle: .radians(.pi),
                   clockwise: false)
        
        // Left edge
        path.closeSubpath()
        
        return path
    }
}

@available(iOS 15.0, macOS 12.0, *)
public struct GlideInput: View {
    private let placeholder: String
    @Binding private var text: String
    private let onSubmit: (() -> Void)?
    
    public init(
        placeholder: String = "Outline the task you are struggling with",
        text: Binding<String>,
        onSubmit: (() -> Void)? = nil
    ) {
        self.placeholder = placeholder
        self._text = text
        self.onSubmit = onSubmit
    }
    
    public var body: some View {
        VStack(alignment: .leading, spacing: 0) {
            VStack(alignment: .leading, spacing: 16) {
                // Text input field - full width
                ScrollView(.vertical, showsIndicators: false) {
                    TextField(placeholder, text: $text, axis: .vertical)
                        .font(GlideTypography.body)
                        .foregroundColor(GlideColors.textPrimary)
                        .lineLimit(1...4)
                        .onSubmit {
                            onSubmit?()
                        }
                        .frame(maxWidth: .infinity, alignment: .leading)
                }
                .frame(maxHeight: 88) // 4 lines * ~22px line height
                .padding(EdgeInsets(top: 0, leading: 16, bottom: 0, trailing: 16))
                
                // All action buttons in one row
                HStack(spacing: 4) {
                    // Add button
                    Button(action: {}) {
                        GlideIcon("plus", size: .sm, color: GlideColors.GrayDark._900)
                            .padding(12)
                            .background(GlideColors.GrayLight._100)
                            .cornerRadius(38)
                    }
                    .buttonStyle(PlainButtonStyle())
                    
                    // Tune button
                    Button(action: {}) {
                        GlideIcon("settings-02", size: .sm, color: GlideColors.GrayLight._600)
                            .padding(12)
                            .background(GlideColors.GrayLight._100)
                            .cornerRadius(38)
                    }
                    .buttonStyle(PlainButtonStyle())
                    
                    Spacer()
                    
                    // Mic button
                    Button(action: {}) {
                        GlideIcon("microphone-01", size: .sm, color: GlideColors.GrayDark._900)
                            .padding(12)
                            .background(GlideColors.GrayLight._100)
                            .cornerRadius(38)
                    }
                    .buttonStyle(PlainButtonStyle())
                    
                    // Send button
                    Button(action: { onSubmit?() }) {
                        GlideIcon("arrow-up", size: .sm, color: GlideColors.GrayLight._25)
                            .padding(12)
                            .background(GlideColors.GrayDark._900)
                            .cornerRadius(38)
                            .overlay(
                                RoundedRectangle(cornerRadius: 38)
                                    .inset(by: 0.5)
                                    .stroke(GlideColors.GrayLight._700.opacity(0.5), lineWidth: 0.5)
                            )
                    }
                    .buttonStyle(PlainButtonStyle())
                }
                .padding(EdgeInsets(top: 0, leading: 16, bottom: 0, trailing: 16))
            }
            .padding(EdgeInsets(top: 16, leading: 0, bottom: 12, trailing: 0))
            .background(Color.white)
        }
        .frame(maxWidth: 450, minWidth: 280)
        .background(Color.white)
        .clipShape(
            RoundedCorners(topLeft: 20, topRight: 20, bottomLeft: 0, bottomRight: 0)
        )
        .overlay(
            RoundedCorners(topLeft: 20, topRight: 20, bottomLeft: 0, bottomRight: 0)
                .stroke(GlideColors.GrayLight._300, lineWidth: 0.5)
        )
        .shadow(
            color: GlideColors.GrayLight._800.opacity(0.02), 
            radius: 6
        )
    }
}

// MARK: - Convenience Initializers
@available(iOS 15.0, macOS 12.0, *)
public extension GlideInput {
    static func standard(text: Binding<String>, onSubmit: @escaping () -> Void) -> GlideInput {
        GlideInput(text: text, onSubmit: onSubmit)
    }
}