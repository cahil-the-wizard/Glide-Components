import SwiftUI

@available(iOS 15.0, macOS 12.0, *)
public struct GlideTextField: View {
    @Binding private var text: String
    private let placeholder: String
    private let isSecure: Bool
    private let keyboardType: UIKeyboardType
    
    public init(
        _ placeholder: String,
        text: Binding<String>,
        isSecure: Bool = false,
        keyboardType: UIKeyboardType = .default
    ) {
        self.placeholder = placeholder
        self._text = text
        self.isSecure = isSecure
        self.keyboardType = keyboardType
    }
    
    public var body: some View {
        Group {
            if isSecure {
                SecureField(placeholder, text: $text)
            } else {
                TextField(placeholder, text: $text)
                    .keyboardType(keyboardType)
            }
        }
        .textFieldStyle(GlideTextFieldStyle())
    }
}

@available(iOS 15.0, macOS 12.0, *)
struct GlideTextFieldStyle: TextFieldStyle {
    func _body(configuration: TextField<Self._Label>) -> some View {
        configuration
            .font(GlideTypography.body)
            .padding(12)
            .background(GlideColors.GrayLight._50)
            .cornerRadius(8)
            .overlay(
                RoundedRectangle(cornerRadius: 8)
                    .stroke(GlideColors.border, lineWidth: 1)
            )
    }
}