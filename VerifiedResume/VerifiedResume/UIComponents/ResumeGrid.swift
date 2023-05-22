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
                if item is SubCV{
                    let subcv = item as! SubCV
                    let cv = subcv.cv
                    ResumeCard(name: "\(cv.firstName) \(cv.lastName)", positon: "Developer", avatar_url: subcv.user.avatar).scaledToFit()
                    
                }
                else if item is SubCompany{
                    let subcompany = item as! SubCompany
                    let company = subcompany.company
                    ResumeCard(name: company.name, positon: company.industry ?? "", avatar_url: company.logo ?? "").scaledToFit()
                }
            }
        }
    }
}

struct ResumeGrid_Previews: PreviewProvider {
    static var previews: some View {
        ResumeGrid<CV>(items: [])
    }
}
