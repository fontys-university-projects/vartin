//
//  ContentView.swift
//  VerifiedResume
//
//  Created by Valentin on 10/05/2023.
//

import SwiftUI

struct ContentView: View {
    @EnvironmentObject var network: Network
    @State private var selectedTab = 0
    
    var body: some View {
        TabView(selection: $selectedTab) {
            ResumePreview(network: network)
                .tabItem {
                    Image(systemName: "person")
                    Text("Profile")
                }
                .tag(0)
            
            SavedProfiles(network: network)
                .tabItem {
                    Image(systemName: "tray.full.fill")
                    
                    Text("Saved")
                }
                .tag(1)
            
            CompanyPreview(network: network)
                .tabItem {
                    Image(systemName: "gear")
                    Text("Settings")
                }
                .tag(2)
        }
        .accentColor(.blue) // Customize the selected tab color
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
            .environmentObject(Network())
    }
}
