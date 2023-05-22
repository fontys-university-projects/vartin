//
//  SavedProfilesData.swift
//  VerifiedResume
//
//  Created by Valentin on 21/05/2023.
//

import Foundation


struct SavedProfile: Hashable, Codable {
    let savedCVs: [SubCV]
    let savedCompanies: [SubCompany]
}

struct SubCV: Hashable, Codable {
    let cv: CV
    let user: Avatar
}

struct SubCompany: Hashable, Codable{
    let company: Company
    let user: Avatar
}

struct Avatar: Hashable, Codable {
    let avatar: String
}
