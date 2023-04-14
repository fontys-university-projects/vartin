package com.example.myseries.components

import androidx.compose.foundation.Image
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.material.Card
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.text.font.FontStyle
import androidx.compose.ui.unit.dp
import coil.compose.rememberImagePainter
import com.example.myseries.data.models.Show


@Composable
fun ShowCard(
    show: Show,
    onClick: () -> Unit ) {
    Card (
        modifier = Modifier
            .size(150.dp, 250.dp)
            .padding(8.dp)
            .clickable(onClick = onClick),
        elevation = 0.dp
    ) {
        Column() {
            Image(
                painter = rememberImagePainter(show.thumbnailUrl),
                contentDescription = show.title,
                modifier = Modifier
                    .aspectRatio(0.68f)
                    .clip(MaterialTheme.shapes.medium)
            )
            Text(
                text = show.title,
                modifier = Modifier
                    .padding(start = 5.dp, top = 8.dp)
//                    .align(Alignment.CenterHorizontally)
                    .fillMaxWidth(),
                style = MaterialTheme.typography.caption
            )
            Text(
                text = show.genres.joinToString(separator = " | "),
                modifier = Modifier
//                    .padding(start = 3.dp, top = 8.dp)
//                    .align(Alignment.CenterHorizontally)
                    .fillMaxWidth(),
                fontStyle = FontStyle.Italic,
                style = MaterialTheme.typography.caption
            )
        }
    }
}