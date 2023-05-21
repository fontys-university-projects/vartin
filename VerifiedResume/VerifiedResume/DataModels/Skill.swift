//
//  Skill.swift
//  VerifiedResume
//
//  Created by Valentin on 21/05/2023.
//

import Foundation

struct Skill: Identifiable, Hashable, Codable {
    var id: String
    var name: String
    var category: String?
    var cvId: String?
    var userId: String?
}
