@echo off
setlocal

cd /D %~dp0
mkdir compressed
@REM For every file that is dragged to this bat that is png or jpg
for %%F in (%*) do (
    if "%%~xF" == ".gif" (
        ffmpeg -i %%F -vf "fps=15" -loop 0 -pix_fmt yuva420p -qscale:v 35 -compression_level 5 -quality 60 -preset drawing compressed\%%~nF.webp
    ) else if "%%~xF" == ".mp3" (
        ffmpeg -i %%F -map 0 -map -0:v -b:a 64k compressed\%%~nF.mp3
    ) else (
        ffmpeg -i %%F -pix_fmt yuva420p -qscale:v 70 -preset drawing compressed\%%~nF.webp
    )
)

endlocal
pause