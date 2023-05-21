//
//  Education.swift
//  VerifiedResume
//
//  Created by Valentin on 21/05/2023.
//

import Foundation

struct Education: Identifiable, Codable {
    var id: String
    var institution: String
    var degree: String
    var startDate: String
    var endDate: String
    var cvId: String?
    var companyId: String?
    var userId: String?
}
