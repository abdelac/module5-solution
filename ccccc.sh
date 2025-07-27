Get-ChildItem -File | ForEach-Object {
    if ($_ -match "S\d+E(\d+)") {
        $episode = $matches[1]
        $newName = "$episode$($_.Extension)"
        Rename-Item -Path $_.FullName -NewName $newName
    }
}
