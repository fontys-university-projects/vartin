//
//  SavedProfiles.swift
//  VerifiedResume
//
//  Created by Valentin on 15/05/2023.
//

import SwiftUI

struct SavedProfiles: View {
    @ObservedObject public var network: Network
    
    var body: some View {
        VStack {
            ScrollView(){
                Section(text: "Saved CVs"){
                    ResumeGrid()
                }
                .padding()
                Section(text: "Saved Companies"){
                    ResumeGrid()
                }
                .padding()
            }
        }.onAppear(){
            network.getSavedCVs()
            network.getSavedCompanies()
        }
    }
}

struct SavedProfiles_Previews: PreviewProvider {
    static var previews: some View {
        SavedProfiles(network: Network())
    }
}
