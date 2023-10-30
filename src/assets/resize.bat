@echo off
setlocal

cd /D %~dp0
mkdir resized
@REM For every file that is dragged to this bat that is png or jpg
for %%F in (%*) do (
    @REM Resize the long dimension
    @REM ffmpeg -i %%F -vf "scale=w='if(gt(iw\,ih)\,720\,-2)':h='if(gt(iw\,ih)\,-2\,720)" resized\%%~nF.webp
    @REM Resize the small dimension
    @REM ffmpeg -i %%F -vf "scale=w='if(gt(ih\,iw)\,720\,-2)':h='if(gt(ih\,iw)\,-2\,720)" resized\%%~nF.webp
    @REM Resize width
    ffmpeg -i %%F -vf "scale=800:-2" resized\%%~nxF
)

endlocal
pause