import { fetchAllDog } from './dogDB'
import { Request, Response } from 'express'

export const getAllDog = async (req: Request, res: Response) => {
	try {
		const dogs = await fetchAllDog()

		return res.json(dogs)
	} catch (error) {
		return res.status(500).json({})
	}
}
