//
//  Company.swift
//  VerifiedResume
//
//  Created by Valentin on 21/05/2023.
//

import Foundation

struct Company: Identifiable, Codable {
    var id: String
    var name: String
    var description: String?
    var industry: String?
    var companySize: String?
    var headquaters: String?
    var logo: String?
    var website: String?
    var email: String?
    var phone: String?
    var address: String?
    var ownerId: String?
}
