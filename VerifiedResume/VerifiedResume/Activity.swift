//
//  Activity.swift
//  VerifiedResume
//
//  Created by Valentin on 22/05/2023.
//

import Foundation
import SwiftUI

class Activity: UIActivity {
    var _activityTitle: String
    var _activityImage: UIImage?
    var activityItems = [Any]()
    var action: ([Any]) -> Void
    
    init(title: String, image: UIImage?, performAction: @escaping ([Any]) -> Void) {
        _activityTitle = title
        _activityImage = image
        action = performAction
        super.init()
    }
    
    override var activityTitle: String? {
        return _activityTitle
    }

    override var activityImage: UIImage? {
        return _activityImage
    }
    
    override var activityType: UIActivity.ActivityType {
        return UIActivity.ActivityType(rawValue: "com.yoursite.yourapp.activity")
    }

    override class var activityCategory: UIActivity.Category {
        return .action
    }
    
    override func canPerform(withActivityItems activityItems: [Any]) -> Bool {
        return true
    }
    
    override func prepare(withActivityItems activityItems: [Any]) {
        self.activityItems = activityItems
    }
    
    override func perform() {
        action(activityItems)
        activityDidFinish(true)
    }
}



