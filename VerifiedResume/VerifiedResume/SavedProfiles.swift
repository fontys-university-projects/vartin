//
//  SavedProfiles.swift
//  VerifiedResume
//
//  Created by Valentin on 15/05/2023.
//

import SwiftUI

struct SavedProfiles: View {
    var body: some View {
        VStack {
            ScrollView(){
                Section(text: "Saved CVs"){
                    ResumeGrid()
                }.padding()
                Section(text: "Saved Companies"){
                    ResumeGrid()
                }.padding()
            }
        }
    }
}

struct SavedProfiles_Previews: PreviewProvider {
    static var previews: some View {
        SavedProfiles()
    }
}
