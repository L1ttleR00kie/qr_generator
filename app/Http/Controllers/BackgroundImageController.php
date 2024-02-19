<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Image;

class BackgroundImageController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'backgroundImage' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048'
        ]);

        // $file_name = time().'_'.$request->file('backgroundImage');
        // $file_path = $request->file('backgroundImage')->storeAs('uploads', $file_name, 'public');

        $uploadedFile = $request->file('backgroundImage');
        $storagePath = 'background_images';
        $filePath = $uploadedFile->store('public/'.$storagePath);

        Image::create([
            'name' => 'basta',
            'path' => $uploadedFile->store('/storage/' . $storagePath),
            
        ]);

        // $imageUpload = new Image;
        // $imageUpload->name = time().'_'.$request->file('backgroundImage');
        // $imageUpload->path = '/storage/' . $file_path;
        // $imageUpload->save();

        return response()->json(['message' => 'Background image saved successfully']);
    }

    public function getData()
    {
        try {
            // Fetch data from the database
            $image = Image::first();

            if ($image) {
                // If an image exists, return its path
                return response()->json(['path' => $image->path]);
            } else {
                // If no image exists, return a message indicating that no image is found
                return response()->json(['message' => 'No image found'], 404);
            }
        } catch (\Exception $e) {
            // If an error occurs, return an error response
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}

