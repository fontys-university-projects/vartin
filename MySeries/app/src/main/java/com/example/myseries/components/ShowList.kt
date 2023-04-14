package com.example.myseries.components

import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.items
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.example.myseries.data.models.Show

@Composable
fun ShowList(name: String, shows: List<Show>, onClickCard: () -> Unit) {
    TextWithDivider(text = name, modifier = Modifier.padding(8.dp))
    LazyRow(
        modifier = Modifier.fillMaxWidth(),
    ) {
        items(shows)  { show ->
            ShowCard(show = show, onClick = onClickCard)
        }
    }
}
