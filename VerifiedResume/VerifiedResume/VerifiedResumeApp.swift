//
//  VerifiedResumeApp.swift
//  VerifiedResume
//
//  Created by Valentin on 10/05/2023.
//

import SwiftUI

@main
struct VerifiedResumeApp: App {
    var network = Network()
    
    var body: some Scene {
        WindowGroup {
            ContentView()
                .environmentObject(network)
        }
    }
}
