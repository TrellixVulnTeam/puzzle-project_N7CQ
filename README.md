
# Puzzle Project

The goal of this project is to create a mobile app that helps in putting together puzzles.

The main user flow of the application looks like this:
    
    1. User starts a new puzzle.
    2. User clicks the camera button to start recording.
    3. Once recording, the application will try to detect and save any puzzle pieces brought into the view of the camera. The user must now drag each puzzle piece into the camera's view individually.
    4. After all of the pieces have been scanned, the user clicks done.
    5. The application attempts to complete the puzzle. A success/failure message is displayed to the user.
    6. If successful, the user is taken to the "Solver" screen.
    7. The user can now bring each piece into the camera's view a second time. This time, the application will detect the piece, and instruct the user where to place the piece relative to other pieces.
    8. Once all pieces are placed, the user is shown a message and can exit to the menu.