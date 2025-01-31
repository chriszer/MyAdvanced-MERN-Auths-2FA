import { Request, Response } from "express";
import { asyncHandler } from "../../middlewares/asyncHandler";
import { MfaService } from "./mfa.service";

export class MfaController {
  private mfaService: MfaService;

  constructor(mfaService: MfaService) {
    this.mfaService = mfaService;
  }

  public generateMFASetup = asyncHandler(
    async(req: Request, res: Response) => {
       await this.mfaService.generateMFASetup()
    }
  );
}
