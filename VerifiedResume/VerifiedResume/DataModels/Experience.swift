//
//  Experience.swift
//  VerifiedResume
//
//  Created by Valentin on 21/05/2023.
//

import Foundation

struct Experience: Identifiable, Hashable, Codable {
    var id: String
    var companyName: String
    var position: String
    var startDate: String
    var endDate: String
    var cvId: String?
    var companyId: String?
    var userId: String?
}
