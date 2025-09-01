import SwiftUI

@available(iOS 15.0, macOS 12.0, *)
public struct GlideFlowCard: View {
    private let title: String
    private let step: String
    private let duration: String
    private let onTap: (() -> Void)?
    
    public init(
        title: String = "Job Application",
        step: String = "Step 2 of 5: Draft outline",
        duration: String = "10 min",
        onTap: (() -> Void)? = nil
    ) {
        self.title = title
        self.step = step
        self.duration = duration
        self.onTap = onTap
    }
    
    public var body: some View {
        Button(action: { onTap?() }) {
            HStack {
                VStack(alignment: .leading, spacing: 4) {
                    Text(title)
                        .font(.system(size: 16, weight: .medium))
                        .foregroundColor(.black)
                        .lineLimit(nil)
                        .multilineTextAlignment(.leading)
                    
                    HStack(spacing: 12) {
                        HStack(spacing: 4) {
                            GlideIcon("check-circle", size: .sm, color: GlideColors.GrayLight._800)
                            Text(step)
                                .font(.system(size: 14, weight: .regular))
                                .foregroundColor(GlideColors.GrayLight._800)
                                .lineLimit(nil)
                        }
                        
                        HStack(spacing: 4) {
                            GlideIcon("hourglass-03", size: .sm, color: GlideColors.GrayLight._800)
                            Text(duration)
                                .font(.system(size: 14, weight: .regular))
                                .foregroundColor(GlideColors.GrayLight._800)
                                .lineLimit(nil)
                        }
                    }
                }
                
                Spacer()
                
                // Hidden chevron (opacity 0)
                Rectangle()
                    .frame(width: 24, height: 24)
                    .opacity(0)
                    .overlay(
                        Path { path in
                            path.move(to: CGPoint(x: 9, y: 6))
                            path.addLine(to: CGPoint(x: 15, y: 12))
                            path.addLine(to: CGPoint(x: 9, y: 18))
                        }
                        .stroke(GlideColors.GrayLight._800, lineWidth: 2)
                        .opacity(0)
                    )
            }
            .padding(.vertical, 20)
            .frame(maxWidth: .infinity, alignment: .leading)
            .background(Color.white)
            .overlay(
                Rectangle()
                    .frame(height: 1)
                    .foregroundColor(GlideColors.GrayLight._200),
                alignment: .bottom
            )
        }
        .buttonStyle(PlainButtonStyle())
        .disabled(onTap == nil)
    }
}

// MARK: - Convenience Initializers
@available(iOS 15.0, macOS 12.0, *)
public extension GlideFlowCard {
    static func standard(
        title: String,
        step: String,
        duration: String,
        onTap: @escaping () -> Void
    ) -> GlideFlowCard {
        GlideFlowCard(
            title: title,
            step: step,
            duration: duration,
            onTap: onTap
        )
    }
    
    static func jobApplication(onTap: (() -> Void)? = nil) -> GlideFlowCard {
        GlideFlowCard(onTap: onTap)
    }
    
    static func resumeReview(onTap: (() -> Void)? = nil) -> GlideFlowCard {
        GlideFlowCard(
            title: "Resume Review",
            step: "Step 1 of 3: Upload documents",
            duration: "5 min",
            onTap: onTap
        )
    }
    
    static func interviewPrep(onTap: (() -> Void)? = nil) -> GlideFlowCard {
        GlideFlowCard(
            title: "Interview Prep",
            step: "Step 4 of 6: Mock interview",
            duration: "30 min",
            onTap: onTap
        )
    }
}