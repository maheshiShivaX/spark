

// export const API_BASE_URL = "https://localhost:7207/api/"; //  "https://localhost:7277/api/";
// export const Image_BASE_URL = "https://localhost:7207/"; //  "https://localhost:7277/api/";

export const API_BASE_URL = "https://www.indianfilms.in/SparkAPI/api/"; //  "https://localhost:7277/api/";
export const Image_BASE_URL = "https://www.indianfilms.in/SparkAPI/"; //  "https://localhost:7277/api/";


// export const API_BASE_URL = "https://www.indianfilms.in/SparkAPI/api/"; //  "https://localhost:7277/api/";
// export const Image_BASE_URL = "https://www.indianfilms.in/SparkAPI/"; //  "https://localhost:7277/api/";



export const endpoints = {
  login: "Login/Login",
  forgotPassowrd: "Login/ForgotPassword",
  verifyOtp: "Login/VerifyOtp",
  resetPassword: "Login/ResetPassword",
  createUser: "Login/AddUser",
  SaveEnquiry: "Enquiry/SaveEnquiry",
  GetEnquiry: "Enquiry/GetEnquiry",
  GetEnquiryLoginId: "Enquiry/GetEnquiryLoginId",

  GetServiceType: "ServiceType/GetServiceType",
  GetHouseStatus: "HouseStatus/GetHouseStatus",

  SaveBookAppoinment: "BookAppoinment/SaveBookAppoinment",
  GetBookAppoinment: "BookAppoinment/GetBookAppoinment",
  GetBookAppoinmentByLoginId: "BookAppoinment/GetBookAppoinmentByLoginId",

  SaveClubMembership: "ClubMembership/SaveClubMembership",
  GetClubMembership: "ClubMembership/GetClubMembership",


  GetSizeType: "SizeType/GetSizeType",

  SaveQuatation: "Quatation/SaveQuatation",
  GetQuatation: "Quatation/GetQuatation",

  GetProductCategorywithsubcategory: "ProductCategory/GetProductCategorywithsubcategory",
  GetProductDetailBycategorysubcategory: "ProductDetail/GetProductDetailBycategorysubcategory",
  GetProductDetailById: "ProductDetail/GetProductDetailById",
  GetProductDetail: "ProductDetail/GetProductDetail",

  GetLoginDetails: "LoginDetail/GetLoginDetails",
  SaveLoginDetail: "LoginDetail/SaveLoginDetail",

  GetMenuDetailByTypeId: "RolePermission/GetMenuDetailByTypeId",


  GetProductCategory: "ProductCategory/GetProductCategory",
  SaveProductCategory: "ProductCategory/SaveProductCategory",
  DeleteProductCategoryById: "ProductCategory/DeleteProductCategoryById",

  SaveProductSubCategory: "ProductSubCategory/SaveProductSubCategory",
  GetProductSubCategory: "ProductSubCategory/GetProductSubCategory",
  DeleteProductSubCategoryById: "ProductSubCategory/DeleteProductSubCategoryById",
  GetProductSubCategoryByCategoryId: "ProductSubCategory/GetProductSubCategoryByCategoryId",

  SaveProductDetail: "ProductDetail/SaveProductDetail",
  DeleteProductDetailById: "ProductDetail/DeleteProductDetailById",

  GetProductSpecificationByProductId: "ProductSpecification/GetProductSpecificationByProductId",
  DeleteProductSpecificationById: "ProductSpecification/DeleteProductSpecificationById",
  SaveProductSpecification: "ProductSpecification/SaveProductSpecification",

  GetSpecification: "Specification/GetSpecification",

  GetProductImageByProductId: "ProductImage/GetProductImageByProductId",
  SaveProductImage: "ProductImage/SaveProductImage",
  DeleteProductImageById: "ProductImage/DeleteProductImageById",


  SaveCartDetail:"SaveCartDetail",
  GetCartDetailByLoginId:"GetCartDetailByLoginId",

  SaveProductOrder:"ProductOrder/SaveProductOrder",
  GetProductOrder:"ProductOrder/GetProductOrder",
  GetProductOrderByOrderId:"ProductOrder/GetProductOrderByOrderId",
  GetClubMembershipByLoginId:"ClubMembership/GetClubMembershipByLoginId",
  GetQuatationByLoginId:"Quatation/GetQuatationByLoginId",
  GetProductOrderByLoginId:"ProductOrder/GetProductOrderByLoginId",

  SentTOQuotation:"ProductOrder/SentTOQuotation",
};
