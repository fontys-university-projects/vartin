//
//  ResumeGrid.swift
//  VerifiedResume
//
//  Created by Valentin on 10/05/2023.
//

import SwiftUI

struct ResumeGrid<T: Hashable>: View {
    let items: [T]
    
    private let adaptveColumns = [
        GridItem(.adaptive(minimum: 150.0))
    ]
    
    var body: some View {
        LazyVGrid(columns: adaptveColumns, spacing: 20) {
            ForEach(items, id: \.self) { item in
                ResumeCard(name: "John Doe", positon: "Developer").scaledToFit()
            }
        }
    }
}

struct ResumeGrid_Previews: PreviewProvider {
    static var previews: some View {
        ResumeGrid<CV>(items: [])
    }
}
