import { Schema, model } from 'mongoose';
const UserSchema = new Schema({
    email: String,
    firstName: String,
    lastName: String
}, {
    timestamps: true
});
UserSchema.methods.fullName = function () {
    return (this.firstName.trim() + ' ' + this.lastName.trim());
};
export const User = model('User', UserSchema);
