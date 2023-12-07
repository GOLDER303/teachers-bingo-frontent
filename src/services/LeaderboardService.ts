import axios from "axios"
import { GeneralLeaderboardDTO } from "../dtos/GeneralLeaderboardDTO"
import { LeaderboardDTO } from "../dtos/LeaderboardDTO"
import { API_URL } from "../utils/ApiRoutes"

export const getGeneralLeaderboard = async (): Promise<GeneralLeaderboardDTO> => {
    try {
        const response = await axios.get(`${API_URL}/leaderboard/general`)

        const data = response.data

        const leaderboard = data as GeneralLeaderboardDTO

        return leaderboard
    } catch (error) {
        const errorMessage = "Error while fetching general leaderboard"

        console.error(`${errorMessage}:\n${error}`)
        throw new Error(errorMessage)
    }
}

export const getBingoGameLeaderboard = async (bingoGameId: string): Promise<LeaderboardDTO> => {
    try {
        const response = await axios.get(`${API_URL}/bingo/${bingoGameId}/leaderboard`)

        const data = response.data

        const leaderboard = data as GeneralLeaderboardDTO

        return leaderboard
    } catch (error) {
        const errorMessage = `Error while fetching leaderboard for bingo game with id: ${bingoGameId}`

        console.error(`${errorMessage}:\n${error}`)
        throw new Error(errorMessage)
    }
}