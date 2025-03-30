import { apiClient } from "@core/apiClient";

/**
 * Delete a user by ID
 * @endpoint /api/user/:id (DELETE)
 */
export const deleteUser = async (userId: string): Promise<void> => {
  try {
    await apiClient.delete(`/api/user/${userId}`);
  } catch (error) {
    console.error(`Failed to delete user with ID ${userId}:`, error);
    throw error;
  }
};

export default deleteUser; 