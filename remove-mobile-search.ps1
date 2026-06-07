$files = @(
  'app/page.tsx',
  'app/not-found.tsx',
  'app/index-two/page.tsx',
  'app/index-three/page.tsx',
  'app/index-four/page.tsx',
  'app/index-five/page.tsx',
  'app/about/page.tsx',
  'app/athletics/page.tsx',
  'app/campus-life/page.tsx',
  'app/contact/page.tsx',
  'app/academic/page.tsx',
  'app/admission/page.tsx',
  'app/academic-area/page.tsx',
  'app/scholarship/page.tsx',
  'app/faculty/page.tsx',
  'app/faculty-details/page.tsx',
  'app/faculty-sub/page.tsx',
  'app/department-details/page.tsx',
  'app/faculty-sub-details/page.tsx',
  'app/event/page.tsx',
  'app/event-details/page.tsx',
  'app/blog/page.tsx',
  'app/blog-grid/page.tsx',
  'app/blog-list/page.tsx',
  'app/blog-details/page.tsx',
  'app/notice-details/page.tsx',
  'app/research/page.tsx',
  'app/alumni/page.tsx',
  'app/program-single/page.tsx',
  'app/single-resource/page.tsx'
)

foreach ($file in $files) {
  if (Test-Path $file) {
    $content = [System.IO.File]::ReadAllText($file)
    $original = $content
    # Remove import lines (handles both LF and CRLF)
    $content = $content -replace "import MobileMenu from '@/components/layout/MobileMenu';\r?\n", ""
    $content = $content -replace "import SearchPopup from '@/components/layout/SearchPopup';\r?\n", ""
    # Remove JSX usage lines
    $content = $content -replace "      <MobileMenu />\r?\n", ""
    $content = $content -replace "      <SearchPopup />\r?\n", ""
    if ($content -ne $original) {
      [System.IO.File]::WriteAllText($file, $content, [System.Text.Encoding]::UTF8)
      Write-Output "Modified: $file"
    } else {
      Write-Output "No change: $file"
    }
  } else {
    Write-Output "NOT FOUND: $file"
  }
}
