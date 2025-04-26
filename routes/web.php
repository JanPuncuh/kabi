<?php

use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

Route::redirect('/','/izdelki');

Route::get('/izdelki', [ProductController::class, 'index'])->name('product.index');
Route::get('/izdelki/{product}', [ProductController::class, 'show'])->name('product.show');
