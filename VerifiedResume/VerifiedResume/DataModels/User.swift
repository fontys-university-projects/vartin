//
//  User.swift
//  VerifiedResume
//
//  Created by Valentin on 19/05/2023.
//

import Foundation

struct User: Codable {
    var uid: String
    var email: String
    var name: String?
    var password: String
    var avatar: String
    var cv: CV
    var savedCVs: [SavedCV]
    var savedCompanies: [SavedCompany]
    var educations: [Education]
    var experiences: [Experience]
    var skills: [Skill]
    var company: [Company]
    var employee: [Employee]
}
