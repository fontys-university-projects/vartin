//
//  ViewController.swift
//  VerifiedResume
//
//  Created by Valentin on 22/05/2023.
//

import UIKit

class ViewController: UIViewController, UIActivityItemSource {
    let customItem = Activity(title: "Tap me!", image: nil) { sharedItems in
        guard let sharedStrings = sharedItems as? [String] else { return }
        
        for string in sharedStrings {
            print("Here's the string: \(string)")
        }
    }
    
//    let items = ["Hello, custom activity!"]
//    let ac = UIActivityViewController(activityItems: items, applicationActivities: [customItem])
//    ac.excludedActivityTypes = [.postToFacebook]
//    present(ac, animated: true)
    
    func activityViewControllerPlaceholderItem(_ activityViewController: UIActivityViewController) -> Any {
        return "The pig is in the poke"
    }

    func activityViewController(_ activityViewController: UIActivityViewController, itemForActivityType activityType: UIActivity.ActivityType?) -> Any? {
        return "The pig is in the poke"
    }
    
    func activityViewController(_ activityViewController: UIActivityViewController, subjectForActivityType activityType: UIActivity.ActivityType?) -> String {
        return "Secret message"
    }
}
