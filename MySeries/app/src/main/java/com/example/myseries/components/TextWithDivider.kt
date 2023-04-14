package com.example.myseries.components

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.material.Divider
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp


@Composable
fun TextWithDivider(text: String, modifier: Modifier) {
    Box(modifier = modifier) {
        Text(
            text = text,
            Modifier
                .align(Alignment.TopStart)
                .padding(bottom = 5.dp)
        )
        Divider(
//            color = Color.White,
            thickness = 1.dp,
            modifier = Modifier
                .fillMaxWidth()
                .height(1.dp)
                .align(Alignment.BottomStart)
        )
    }
}