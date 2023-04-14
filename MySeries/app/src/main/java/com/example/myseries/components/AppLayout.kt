package com.example.myseries.components

import androidx.compose.foundation.layout.*
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Scaffold
import androidx.compose.material.Text
import androidx.compose.material.TopAppBar
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.example.myseries.ui.theme.MySeriesTheme


@Preview(showBackground = true)
@Composable
fun AppLayoutPreview() {
    MySeriesTheme {
        // A surface container using the 'background' color from the theme
        AppLayout(
            modifier = Modifier.fillMaxSize(),
            backgroundColor = MaterialTheme.colors.background,
            navigationItems = listOf()
        ) {
        }
    }
}

@Composable
fun AppLayout(
    modifier: Modifier,
    backgroundColor: Color,
    navigationItems: List<ButtonDesc>,
    content: @Composable (PaddingValues) -> Unit) {
    Scaffold(
        modifier = modifier,
        backgroundColor = backgroundColor,
        topBar = {
            TopAppBar() {
                Column(modifier = Modifier.fillMaxWidth(), horizontalAlignment = Alignment.CenterHorizontally) {
                    Text(text = "Good Afternoon", fontWeight = FontWeight.Bold)
                    Text(text = "John Doe", fontWeight = FontWeight.Light)
                }
            }
        },
        bottomBar = {
            NavigationBar(navigationItems)
        },
    ) {
        content(it)
    }
}



