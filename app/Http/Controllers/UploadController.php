<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UploadController extends Controller
{

    public function store(Request $request)
    {
        if ($request->hasFile('files')) {
            $file = $request->file('files');
            $filename = $file->getClientOriginalName();
            $path = public_path("uploads/{$request->folder}/");
            $file->move($path, $filename);
            $fileUrl = asset("uploads/{$request->folder}/" . $filename);
            return response()->json(['success' => true, 'fileUrl' => $fileUrl]);
        }

        return response()->json(['success' => false, 'message' => 'File upload failed']);
    }
}
