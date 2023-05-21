//
//  Section.swift
//  VerifiedResume
//
//  Created by Valentin on 15/05/2023.
//

import SwiftUI

struct Section<Content: View> : View {
    
    let text: String
    @ViewBuilder var content: () -> Content
    
    var body: some View {
        VStack(alignment: .leading){
            Text(text)
                .font(.headline)
                
                
            Divider()
            content()
        }
    }
}

struct Section_Previews: PreviewProvider {
    static var previews: some View {
        Section(text: "text"){}
    }
}
