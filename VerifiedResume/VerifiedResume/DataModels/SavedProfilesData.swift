//
//  SavedProfilesData.swift
//  VerifiedResume
//
//  Created by Valentin on 21/05/2023.
//

import Foundation


struct SavedProfile: Hashable, Codable {
    let savedCV: [CV]
    let savedCompany: [Company]
}
