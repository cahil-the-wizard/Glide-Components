import SwiftUI

@available(iOS 15.0, macOS 12.0, *)
public struct GlideNavBar: View {
    public struct TabItem {
        let icon: String
        let title: String
        let action: () -> Void
        
        public init(icon: String, title: String, action: @escaping () -> Void) {
            self.icon = icon
            self.title = title
            self.action = action
        }
    }
    
    private let items: [TabItem]
    private let selectedIndex: Int
    
    public init(items: [TabItem], selectedIndex: Int = 0) {
        self.items = items
        self.selectedIndex = selectedIndex
    }
    
    public var body: some View {
        HStack(alignment: .top, spacing: 36) {
            ForEach(Array(items.enumerated()), id: \.offset) { index, item in
                TabItemView(
                    item: item,
                    isSelected: index == selectedIndex
                )
            }
        }
        .padding(EdgeInsets(top: 16, leading: 16, bottom: 12, trailing: 16))
        .background(Color.clear)
    }
}

@available(iOS 15.0, macOS 12.0, *)
struct TabItemView: View {
    let item: GlideNavBar.TabItem
    let isSelected: Bool
    
    var body: some View {
        Button(action: item.action) {
            VStack(spacing: 2) {
                // Icon container
                ZStack {
                    GlideIcon(item.icon, size: .lg, color: textColor)
                }
                .frame(width: 23, height: 23)
                
                // Label text
                Text(item.title)
                    .font(GlideTypography.bodySmall)
                    .foregroundColor(textColor)
            }
            .padding(12)
            .frame(width: 64, height: 64)
        }
        .buttonStyle(PlainButtonStyle())
    }
    
    private var textColor: Color {
        if isSelected {
            return GlideColors.GrayDark._800  // Active/selected state - darker
        } else {
            return GlideColors.GrayLight._500  // Inactive state - lighter gray
        }
    }
}

// MARK: - Convenience Initializers
@available(iOS 15.0, macOS 12.0, *)
public extension GlideNavBar {
    static func standard(selectedIndex: Int = 0, onItemTap: @escaping (Int) -> Void) -> GlideNavBar {
        let items = [
            TabItem(icon: "home-02", title: "Home") { onItemTap(0) },
            TabItem(icon: "search-md", title: "Search") { onItemTap(1) },
            TabItem(icon: "plus", title: "Flow") { onItemTap(2) }
        ]
        return GlideNavBar(items: items, selectedIndex: selectedIndex)
    }
}