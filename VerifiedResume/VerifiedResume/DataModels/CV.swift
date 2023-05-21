//
//  CV.swift
//  VerifiedResume
//
//  Created by Valentin on 21/05/2023.
//

import Foundation

struct CV: Identifiable, Codable {
    var id: String
    var firstName: String
    var lastName: String
    var about: String
    var email: String?
    var phone: String?
    var website: String?
    var address: String?
    var userId: String
}
