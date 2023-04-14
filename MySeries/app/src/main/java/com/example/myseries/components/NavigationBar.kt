package com.example.myseries.components

import androidx.compose.material.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.AccountBox
import androidx.compose.material.icons.filled.Home
import androidx.compose.material.icons.filled.Star
import androidx.compose.runtime.*
import androidx.compose.ui.graphics.vector.ImageVector

data class ButtonDesc(
    val icon: ImageVector,
    val text: String,
    val onClick: () -> Unit
)

@Composable
fun NavigationBar(items: List<ButtonDesc>){
    var selectedItem by remember { mutableStateOf(0) }

    BottomNavigation {
        items.forEachIndexed { index, item ->
            BottomNavigationItem(
                icon = { Icon(item.icon, contentDescription = null) },
                label = { Text(item.text, style = MaterialTheme.typography.button) },
                selected = selectedItem == index,
                onClick = {
                    selectedItem = index
                    item.onClick()
                }
            )
        }
    }
}