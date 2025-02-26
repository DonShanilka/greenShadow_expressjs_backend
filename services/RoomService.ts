import { prisma } from '../db/Prisma_data_storage';
import { Room } from '../model/Room';

export async function RoomAdd(room: Room) {
  const half = Number(room.hallFloor);
  try {
    const newRoom = await prisma.room.create({
      data: {
        roomNumber: room.roomNumber,
        roomType: room.roomType,
        selectedImage: room.selectedImage,
        hallFloor: half,
        price: room.price,
        status: room.status,
      },
    });

    console.log("Room Added Successfully:", newRoom);
    return newRoom; // Return created room
  } catch (error) {
    console.error("Error Adding Room:", error);
    throw new Error("Failed to add room"); // Throw for higher-level handling
  }
}

export async function RoomUpdate(id : string, room : Room) {
  const half = Number(room.hallFloor);
  try {
    const existingRoom = await prisma.room.findUnique({
      where : {roomNumber : id},
    });

    if (!existingRoom) {
      throw new Error(`${id} Room Number not found`);
    }

    const roomUpdate = await prisma.room.update({
      where: {roomNumber : id},
      data : {
        roomType : room.roomType,
        selectedImage : room.selectedImage,
        hallFloor : half,
        price : room.price,
        status : room.status
      }
    });
    console.log("Success Full Update Room", roomUpdate);
  } catch (error) {
    console.log("Error", error);
  }
}

export async function RoomDelete(id : string) {
  try {
    const existingRoom = await prisma.room.findUnique({
      where : {roomNumber : id}
    });

    if (!existingRoom) {
      throw new Error(`${id} Room Number not found`);
    }

    await prisma.room.delete({
      where : {roomNumber : id}
    });
    
    console.log("Success Fully Deleted Room", id);
  } catch (error) {
    console.log("Error", error);
  }
}

export async function getAll(){
  try {
    const getAll = await prisma.room.findMany();
    console.log(getAll);
    return getAll;
  } catch (error) {
    console.log("Error", error);
  }
}