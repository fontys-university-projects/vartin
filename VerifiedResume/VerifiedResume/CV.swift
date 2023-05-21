//
//  CV.swift
//  VerifiedResume
//
//  Created by Valentin on 19/05/2023.
//

import Foundation

struct CV: Identifiable, Decodable {
    var id: String
    var firstName: String
    var lastName: String
    var about: String
//    var email: Json
//    var phone: Json
//    var website: Json
    var address: String
//    var langauges: [Language]
//    var educations: [Education]
//    var experiences [Experience]
//    var skills: [Skills]
    var userId: String
}
