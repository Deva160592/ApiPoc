const apiClient = require('../utils/apiClient');

class UserAPI {
    async createUsersWithList(userList) {
        return await apiClient.post(`/user/createWithList`, userList);
}
  async getUserByUsername(username) {
    return await apiClient.get(`/user/${username}`);
  }
async deleteUserByUsername(username) {
    return await apiClient.delete(`/user/${username}`);
  }
    }

module.exports = new UserAPI();
