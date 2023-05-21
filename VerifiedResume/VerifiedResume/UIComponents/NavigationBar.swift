//
//  NavigationBar.swift
//  VerifiedResume
//
//  Created by Valentin on 20/05/2023.
//

import SwiftUI

struct NavigationBar: View {
    @State private var selectedTab = 0
    
    var body: some View {
        TabView(selection: $selectedTab) {
//                    ResumePreview()
//                        .tabItem {
//                            Image(systemName: "person")
//                            Text("Profile")
//                        }
//                        .tag(0)
                    
                    SavedProfiles()
                        .tabItem {
                            Image(systemName: "tray.full.fill")

                            Text("Saved")
                        }
                        .tag(1)
                    
                    CompanyPreview()
                        .tabItem {
                            Image(systemName: "gear")
                            Text("Settings")
                        }
                        .tag(2)
                }
                .accentColor(.blue) // Customize the selected tab color
    }
}

struct NavigationBar_Previews: PreviewProvider {
    static var previews: some View {
        NavigationBar()
    }
}
