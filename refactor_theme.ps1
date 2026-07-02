$files = Get-ChildItem -Path "d:\CN\1_sanixor_ai\src" -Recurse -Include *.tsx

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    
    # Text colors
    $content = $content -replace '\btext-white\b', 'text-foreground'
    $content = $content -replace 'text-white/([0-9\.]+)', 'text-foreground/$1'
    $content = $content -replace 'text-white/\[([^\]]+)\]', 'text-foreground/[$1]'
    $content = $content -replace '\btext-slate-400\b', 'text-muted-foreground'
    $content = $content -replace '\btext-slate-300\b', 'text-muted-foreground'

    # Border colors
    $content = $content -replace '\bborder-white\b', 'border-foreground'
    $content = $content -replace 'border-white/([0-9\.]+)', 'border-foreground/$1'
    $content = $content -replace 'border-white/\[([^\]]+)\]', 'border-foreground/[$1]'

    # Background colors (transparent overlays)
    $content = $content -replace 'bg-white/([0-9\.]+)', 'bg-foreground/$1'
    $content = $content -replace 'bg-white/\[([^\]]+)\]', 'bg-foreground/[$1]'
    
    # Hardcoded dark backgrounds
    $content = $content -replace 'bg-\[\#0a0a14\]', 'bg-background'
    $content = $content -replace 'bg-\[\#090911\]', 'bg-background'
    $content = $content -replace 'bg-\[\#030307\]', 'bg-background'
    
    # Specific exceptions or corner cases we want to catch
    $content = $content -replace 'bg-slate-900', 'bg-card'
    $content = $content -replace 'bg-slate-950', 'bg-background'

    Set-Content -Path $file.FullName -Value $content -NoNewline
}

Write-Output "Refactor complete."
