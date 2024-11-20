import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(process.cwd(), '.env') })

// Export configuration
export default {
  port: process.env.PORT,
  databaseUrl: process.env.DATABASE_URL, // Corrected variable name
}
